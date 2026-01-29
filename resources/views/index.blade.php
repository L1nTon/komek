@extends('layouts.app')

@section('title', 'Komek — Landing')

@section('body')
  @include('components.banner')
  @include('components.topbar')
  @include('components.header')
  @include('components.filters')
  @include('components.movies')
  @include('components.features')
  @include('components.footer')
@endsection

